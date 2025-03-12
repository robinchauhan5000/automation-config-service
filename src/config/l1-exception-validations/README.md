# Custom L1 Validations

Place your custom L1 validation rules in this directory. Each file should export a single function called `performL1CustomValidation` that follows this structure:

```typescript
import { validationInput, validationOutput } from '../L1-validations/types/test-config';

export function performL1CustomValidation(input: validationInput): validationOutput {
  const { payload } = input;
  const context = payload.context || {};

  // Initialize results array
  const results: validationOutput = [];

  // Add your validation logic here
  if (/* validation fails */) {
    results.push({
      valid: false,
      code: 30000, // Use custom error codes in 30000-39999 range
      description: "Your validation error message"
    });
  }

  // If no failures found, return success
  if (results.length === 0) {
    results.push({ valid: true, code: 200 });
  }

  return results;
}
```

## How It Works

1. All validation files in this directory will be automatically discovered and integrated
2. Files will be copied to `src/validations/L1-custom-validation/` in the output project
3. Each file's `performL1CustomValidation` function will be executed during the L1 validation phase
4. If any validation returns an error result (valid: false), the request will be rejected

## Best Practices

1. Create internal helper functions for specific validations
2. Check domain/action to limit validation scope
3. Use descriptive error codes and messages
4. Handle edge cases gracefully (null checks, etc.)
5. Return a valid result (code 200) when no errors are found

## Example

Here's an example validation that checks if a category field exists in retail search requests:

```typescript
import {
  validationInput,
  validationOutput,
} from "../L1-validations/types/test-config";

export function performL1CustomValidation(
  input: validationInput
): validationOutput {
  const { payload } = input;
  const context = payload.context || {};
  const domain = context.domain || "";
  const action = context.action || "";

  // Initialize results array
  const results: validationOutput = [];

  // Only apply this validation to retail domain search actions
  if (domain === "retail" && action === "search") {
    // Check if category exists in the search intent
    if (payload?.message?.intent?.category === undefined) {
      results.push({
        valid: false,
        code: 30001,
        description: "Retail search requests must include a category",
      });
    }
  }

  // If no failures found, return success
  if (results.length === 0) {
    results.push({ valid: true, code: 200 });
  }

  return results;
}
```

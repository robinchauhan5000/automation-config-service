/**
 * Payment Validations - EXAMPLE IMPLEMENTATION
 * 
 * This file demonstrates how to implement custom L1 validations for payment-related rules.
 * It is provided as a reference and should be modified to suit your specific business requirements.
 * 
 * IMPORTANT: This is an example implementation and not intended for direct use in production.
 */

// Define validation types locally to avoid import issues
type ValidationResult = {
  valid: boolean;
  code: number;
  description?: string;
};

type ValidationInput = {
  payload: Record<string, any>;
  externalData?: Record<string, any>;
  config?: {
    runAllValidations?: boolean;
  };
};

type ValidationOutput = ValidationResult[];

/**
 * EXAMPLE: Main validation function that will be executed during L1 validation phase
 * This shows the pattern to follow when implementing your own custom validations
 * 
 * @param input The validation input object
 * @returns Array of validation results
 */
export function performL1CustomValidation(input: ValidationInput): ValidationOutput {
  // Extract payload, context, domain and action
  const { payload } = input;
  const context = payload.context || {};
  const domain = context.domain || '';
  const action = context.action || '';
  
  console.log(`Running payment validations for ${domain}/${action}`);
  
  // Initialize results array
  const results: ValidationOutput = [];
  
  // EXAMPLE: Payment method validation for retail domain confirm actions
  if (domain === 'retail' && ['confirm', 'on_confirm'].includes(action)) {
    const paymentMethodValid = validatePaymentMethod(payload);
    if (!paymentMethodValid) {
      results.push({
        valid: false,
        code: 30010,
        description: `- **condition PaymentMethodInvalid**: Payment method must be one of the supported types (CARD, UPI, WALLET, COD)`
      });
    }
  }
  
  // EXAMPLE: Transaction ID format validation for any financial transaction
  if (['confirm', 'on_confirm', 'init', 'on_init'].includes(action)) {
    const transactionIdValid = validateTransactionIdFormat(payload);
    if (!transactionIdValid) {
      results.push({
        valid: false,
        code: 30011,
        description: `- **condition InvalidTransactionIdFormat**: Transaction ID must be in the format XXX-YYYY-ZZZZZZ`
      });
    }
  }
  
  // If no issues found, return a success result
  if (results.length === 0) {
    results.push({ valid: true, code: 200 });
  }
  
  return results;
}

/**
 * EXAMPLE: Validates that the payment method is valid for the domain
 * Replace with your actual business logic for payment method validation
 * 
 * @param payload The request payload
 * @returns boolean indicating if validation passed
 */
function validatePaymentMethod(payload: Record<string, any>): boolean {
  // Get payment info from payload
  const paymentType = payload?.message?.order?.payments?.[0]?.type;
  
  // List of valid payment methods - replace with your actual supported methods
  const validPaymentMethods = ['CARD', 'UPI', 'WALLET', 'COD'];
  
  // Check if payment type is valid
  return paymentType && validPaymentMethods.includes(paymentType);
}

/**
 * EXAMPLE: Validates transaction ID format
 * Replace with your actual business logic for transaction ID validation
 * 
 * @param payload The request payload
 * @returns boolean indicating if validation passed
 */
function validateTransactionIdFormat(payload: Record<string, any>): boolean {
  // Get transaction ID from payload
  const transactionId = payload?.message?.order?.payments?.[0]?.transaction_id;
  
  // If transaction ID doesn't exist, validation passes (might be handled by other validations)
  if (!transactionId) return true;
  
  // Check format using regex: XXX-YYYY-ZZZZZZ pattern
  // Replace with your actual transaction ID format requirements
  const transactionIdPattern = /^[A-Z]{3}-\d{4}-[A-Z0-9]{6}$/;
  
  return transactionIdPattern.test(transactionId);
} 
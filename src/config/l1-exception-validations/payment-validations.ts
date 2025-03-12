/**
 * Payment Validations
 * 
 * Custom validations for payment-related rules across domains
 */

// Note: When you create a validation file, you would import the types 
// from the generated code. Here we use 'any' for demonstration purposes.

export function performL1CustomValidation(input: any): any {
  // Extract payload, context, domain and action
  const { payload } = input;
  const context = payload.context || {};
  const domain = context.domain || '';
  const action = context.action || '';
  
  console.log(`Running payment validations for ${domain}/${action}`);
  
  // Initialize results array
  const results: any[] = [];
  
  // Validation 1: Payment method validation for retail domain confirm actions
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
  
  // Validation 2: Transaction ID format validation for any financial transaction
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
 * Validates that the payment method is valid for the domain
 */
function validatePaymentMethod(payload: any): boolean {
  // Get payment info from payload
  const paymentType = payload?.message?.order?.payments?.[0]?.type;
  
  // List of valid payment methods
  const validPaymentMethods = ['CARD', 'UPI', 'WALLET', 'COD'];
  
  // Check if payment type is valid
  return paymentType && validPaymentMethods.includes(paymentType);
}

/**
 * Validates transaction ID format
 */
function validateTransactionIdFormat(payload: any): boolean {
  // Get transaction ID from payload
  const transactionId = payload?.message?.order?.payments?.[0]?.transaction_id;
  
  // If transaction ID doesn't exist, validation passes (might be handled by other validations)
  if (!transactionId) return true;
  
  // Check format using regex: XXX-YYYY-ZZZZZZ pattern
  const transactionIdPattern = /^[A-Z]{3}-\d{4}-[A-Z0-9]{6}$/;
  
  return transactionIdPattern.test(transactionId);
} 
/* eslint-disable no-undef */
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function Pagar ({ value, order }) {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
      <PayPalButtons style={{ layout: 'horizontal' }} />
    </PayPalScriptProvider>
  )
}

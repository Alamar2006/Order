import { PaymentSuccess } from "../src/shared/ui/paymentFolder/PaymentSuccess.jsx";
import { PaymentFailed } from "../src/shared/ui/paymentFolder/PaymentFailed.jsx";
import { LandingPage } from './pages/landing/index.js'; // и здесь тоже
import Router from "preact-router";


export function App() {
  return (
    
    <Router>
      <LandingPage default/>
      <PaymentSuccess path="/payment-success" />
      <PaymentFailed path="/payment-failed" />
    </Router>
    
  )
}


"use client"


type Props = {
  userId: string
  affiliate: boolean
  stripeId?: string
}

// TODO: Connect the use Payments hook

const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {

  return <div>PaymentForm</div>
}

export default PaymentForm
class StaticPageController < ApplicationController
  def index
    @payments = PaymentOption.all
    @gain_credits = CreditType.find_by(credit_type: 'Gain Points').credits
    @lose_credits = CreditType.find_by(credit_type: 'Lose Points').credits
    @copyright = Copyright.first
    @faqs = Faq.all
  end

  def test

  end

  def app

  end
end

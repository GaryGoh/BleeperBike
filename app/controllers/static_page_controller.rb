class StaticPageController < ApplicationController
  def index
    @payments = PaymentOption.all
    @gain_credits = CreditType.find_by(credit_type: 'Gain Points').credits
    @lose_credits = CreditType.find_by(credit_type: 'Lose Points').credits
    @copyright = Copyright.first
    @faqs = Faq.all
    @news = Blog.order(:created_at).last()

    if mobile?
      render 'static_page/mobile_index'
    else
      render 'static_page/desktop_index'
    end
  end

  def test

  end

  def invitation
    render 'static_page/invitation/index'
  end

  def terms_and_conditions
    render 'static_page/invitation/termsAndConditions'
  end

  def privacy_policy
    render 'static_page/invitation/privacyPolicy'
  end
end

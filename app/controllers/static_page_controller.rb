class StaticPageController < ApplicationController
  def index
    @payments = PaymentOption.all.order('priority')
    @gain_credits = CreditType.find_by(credit_type: 'Gain Points').credits.order('priority')
    @lose_credits = CreditType.find_by(credit_type: 'Lose Points').credits.order('priority')
    @copyright = Copyright.first
    @faqs = Faq.all.order('priority')
    @news = Blog.order(:created_at).last()

    if mobile? and !tablet
      render 'static_page/mobile_index'
    else
      render 'static_page/desktop_index'
    end
  end

  def test
    @payments = PaymentOption.all.order('priority')

  end

  def navtest
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

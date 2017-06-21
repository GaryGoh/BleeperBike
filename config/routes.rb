Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :faqs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_page#index'
  get '/invitation', to: 'static_page#invitation'
  get '/terms_and_conditions', to: 'static_page#terms_and_conditions'
  get '/privacy_policy', to: 'static_page#privacy_policy'


  if Rails.env.development?
    get '/test', to: 'static_page#test'
  end

end

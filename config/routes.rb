Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :faqs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_page#index'

  get '/test', to: 'static_page#test'
  get '/app', to: 'static_page#app'

end

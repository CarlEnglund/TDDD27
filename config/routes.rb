Rails.application.routes.draw do
  resources :reviews
  resources :movies

  root 'pages#landing'

   get '/home', to: 'pages#home'

   get '/auth/:provider/callback', to: 'sessions#create'

   delete '/logout', to: 'sessions#destroy'

  get '/search', to: 'search#index'


end

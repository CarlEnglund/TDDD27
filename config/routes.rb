Rails.application.routes.draw do
  resources :reviews
  resources :movies

  root 'pages#landing'

   get '/home', to: 'pages#home'

   get '/auth/:provider/callback', to: 'sessions#create'

   get '/logout', to: 'sessions#destroy'

   get '/destroy/:id', to: 'reviews#destroy'

  get '/search', to: 'search#index'

  get '/profile', to: 'pages#profile'

end

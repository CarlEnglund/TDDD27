Rails.application.routes.draw do
  resources :reviews
   root 'pages#landing'

   get '/home', to: 'pages#home'

   get '/auth/:provider/callback', to: 'sessions#create'

   delete '/logout', to: 'sessions#destroy'

end

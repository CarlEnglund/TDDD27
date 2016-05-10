json.array!(@reviews) do |review|
  json.extract! review, :id, :name, :score, :comment, :movie_id
  json.url review_url(review, format: :json)
end

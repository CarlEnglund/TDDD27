class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :score
      t.string :comment
      t.string :movie_id

      t.timestamps null: false
    end
  end
end

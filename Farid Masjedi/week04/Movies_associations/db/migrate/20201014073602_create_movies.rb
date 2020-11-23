class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :year
      t.text :artist
      t.text :imdb
      t.text :image
    end
  end
end

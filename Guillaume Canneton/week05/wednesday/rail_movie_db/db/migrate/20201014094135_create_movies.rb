class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :director
      t.text :release
      t.text :awards
      t.integer :length
      t.text :image

      t.timestamps
    end
  end
end

class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.text :members
      t.text :genre
      t.text :image

      t.timestamps
    end
  end
end

class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :title
      t.date :release_date
      t.float :meta_rating
      t.text :cover_image
    end
  end
end

class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :title
      t.date :release
      t.text :tracks
      t.text :cover

      t.timestamp
    end
  end
end

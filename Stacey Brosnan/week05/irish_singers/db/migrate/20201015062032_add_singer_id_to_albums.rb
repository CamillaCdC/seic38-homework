class AddSingerIdToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :singer_id, :integer
  end
end

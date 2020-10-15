class AddMusicianIdToWorks < ActiveRecord::Migration[5.2]
  def change
    add_column :works, :musician_id, :integer
  end
end

class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|
      t.text :name
      t.date :formed
      t.integer :member_count
      t.text :genre
      t.text :image

      t.timestamps
    end
  end
end

class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :country
      t.date :dob
      t.text :style
      t.text :image

      t.timestamps
    end
  end
end

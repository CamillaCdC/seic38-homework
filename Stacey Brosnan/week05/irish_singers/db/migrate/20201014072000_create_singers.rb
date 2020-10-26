class CreateSingers < ActiveRecord::Migration[5.2]
  def change
    create_table :singers do |t|
      t.text :name
      t.text :nationality
      t.text :gender
      t.date :dob
      t.text :image

      t.timestamps
    end
  end
end

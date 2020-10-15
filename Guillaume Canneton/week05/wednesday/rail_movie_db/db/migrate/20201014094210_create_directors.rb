class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :filmo
      t.text :dob
      t.text :awards
      t.text :nationality
      t.text :image

      t.timestamps
    end
  end
end

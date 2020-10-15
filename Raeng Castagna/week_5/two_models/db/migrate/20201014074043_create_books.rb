class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.text :author
      t.text :style
      t.text :published
      t.text :image
      t.text :description

      t.timestamps
    end
  end
end

class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
    t.text :title
    t.text :author
    t.text :releasedate
    t.text :image

    end
  end
end

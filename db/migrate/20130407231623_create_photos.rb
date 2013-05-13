class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.boolean :workinprogress
      t.string :filename
      t.string :caption
      t.text :description

      t.timestamps
    end
  end
end

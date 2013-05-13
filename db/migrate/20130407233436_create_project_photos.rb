class CreateProjectPhotos < ActiveRecord::Migration
  def change
    create_table :project_photos do |t|
      t.integer :project_id
      t.integer :photo_id

      t.timestamps
    end
  end
end

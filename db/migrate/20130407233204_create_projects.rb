class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.timestamp :start_date
      t.timestamp :end_date
      t.float :price

      t.timestamps
    end
  end
end

class Project < ActiveRecord::Base
    attr_accessible :name, :description, :start_date, :end_date, :price

    has_many :project_photos
	has_many :photos, :through => :project_photos

end

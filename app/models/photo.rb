class Photo < ActiveRecord::Base
	attr_accessible :workinprogress, :filename, :caption, :description

    has_many :project_photos
	has_many :projects, :through => :project_photos

end

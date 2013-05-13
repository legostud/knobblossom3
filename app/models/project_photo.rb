class ProjectPhoto < ActiveRecord::Base
	attr_accessible :project_id, :photo_id

	belongs_to :project
	belongs_to :photo
end

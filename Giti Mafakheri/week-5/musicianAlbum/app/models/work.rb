class Work < ActiveRecord::Base
  belongs_to :musician, :optional =>true
end

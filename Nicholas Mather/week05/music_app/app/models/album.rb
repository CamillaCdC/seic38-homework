class Album < ActiveRecord::Base
  def tracklist
    if self.tracks.present?
      self.tracks.split(',')
    else
      []
    end
  end
end

class Artist < ActiveRecord::Base
  def member_list
    if self.members.present?
      self.members.split(',')
    else
      []
    end
  end

end

class Ocean < ActiveRecord::Base
  def countries
    if self.borders.present?
      self.borders.split ' '
    else
      []
    end
  end
end

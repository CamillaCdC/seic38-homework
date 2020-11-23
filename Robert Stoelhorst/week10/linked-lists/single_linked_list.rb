class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil) # variadic (value or nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # unshift
    node = Node.new value
    node.next = @head
    @head = node # the new node is the new head.
  end

  def append(value)
    last.next = Node.new value # puts a new node at the end
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next # walking/iterating the nodes until the end
    end
    current_node # implicit return
  end

# TODO:
  def remove
    @head = @head.next
  end
  #
  def insert_after(node, new_value)
    node = Node.new new_value
    current_node = current_node(@head, node)
    current_node(@head, node).next = node.next = @node
    return node
  end
  #   @next = node.next
  #   # @next.prev = value if @next
  #   # @prev = nodesnode.next = value
  #   # node = @current_node
  #   # @current_node.next = current_node.insert
  # end
  #
  def find(needle)
   current_node = @head
   needle.times do
     current_node = current_node.next
   end
   return current_node
 end
  #   # return the node with the value of needle (or nil)
  # end
  #
  # # TRICKY
  # def reverse # non destructive
  # end
  #
  # # TRICKIER
  # def reverse! # destructive
  # end

  # Bonus: .map, .reduce, .sselect, .reject
  # Bonus: .at_index(3) # equivilant to: bros[3]

end
#   Node.new
# end


# SinglyLinkedList.new
# SinglyLinkedList::Node.new
#
# ActiveRecord::Base


bros = SinglyLinkedList.new
bros.prepend 'A'
bros.prepend 'B'
bros.prepend 'C'
bros.prepend 'D'
bros.prepend 'E'

# bros.each do |b|
#   puts b.upcase

require 'pry'
binding.pry

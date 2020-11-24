class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(val)
      @value = val
      @next = nil
    end
  end

  def initialize( value=nil ) # variadic
    @head = Node.new(value) unless value.nil?
  end

  attr_accessor :head

  def prepend( value ) #unshift
    node = Node.new value
    node.next = @head
    @head = node # the new node is the new head
  end

  def append( value )
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  # TODO
  def remove #aka shift- remove first element
    @head = @head.next
  end

  def insert_after( node, new_value ) # Unsure what to input for node, using val
    current_node = @head
    new_node = Node.new new_value
    while current_node
      if current_node.value == node
        new_node.next = current_node.next
        current_node.next = new_node
      end
      current_node = current_node.next
    end
  end

  def find(needle)
    current_node = @head
    while current_node
      if current_node.value == needle
        return current_node
      end
      current_node = current_node.next
    end
    nil
  end

  def reverse #non destructive (gives a new list with reversed order)
    new_list = SinglyLinkedList.new
    current_node = @head
    while current_node
      new_list.prepend current_node.value
      current_node = current_node.next
    end
    new_list
  end

  def reverse! #updates existing list to be in reverse order
    current_node = @head.next
    while current_node
      prepend current_node.value
      current_node = current_node.next
    end
  end

  def each
  end

  #bonus .map, .reduce, .select, .reject
  #bonus2 .at_index(3) (equivalent to brothers[3])

end


bros = SinglyLinkedList.new
bros.prepend 'C'
bros.prepend 'B'
bros.prepend 'A'

# chico -> groucho -> harpo

require 'pry'
binding.pry

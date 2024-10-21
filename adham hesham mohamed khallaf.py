
#adham hesham khallaf
def selection_sort(lst):
    length = len(lst)
    for index in range(length):
        smallest = index
        for scan in range(index + 1, length):
            if lst[scan] < lst[smallest]:
                smallest = scan
        
        lst[index], lst[smallest] = lst[smallest], lst[index]
        
        print("Step", index + 1, ":", lst)
    return lst

nums = [35, 4, 77, 69]
print("Initial list:", nums)
selection_sort(nums)
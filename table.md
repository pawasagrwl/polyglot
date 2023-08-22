| Topic | Operation | Python | JavaScript | Java | C++ | Golang | Rust |
| :----: | :-------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **IO** |
| | *Input* | ```x = input("input: ")``` | ```prompt("input: ")``` | ```Scanner sc = new Scanner(System.in); x = sc.nextLine();``` | ```cin >> x;``` | ```fmt.Scan(&x);``` | ```let mut x = String::new(); std::io::stdin().read_line(&mut x).unwrap();``` |
| |  |  |  |  |  | ```fmt.Scanln(&x);``` |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Output* | ```print(x)``` | ```console.log(x)``` | ```System.out.println(x);``` | ```cout << x;``` | ```fmt.Println(x);``` | ```println!("{}", x);``` |
| |  | ```print(f"{x}")``` |  |  | ```std::cout << x << std::endl;``` | ```fmt.Printf("%v\n", x);``` | ```print!("{}\n", x);``` |
| |  | ```print("{}".format(x))``` |  |  | ```printf("%s\n", x);``` | ```log.Println(x);``` | ```format!("{}", x);``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Typechecking* | ```type(variable)``` | ```typeof variable``` | ```instanceof ClassName``` | ```typeid(variable)``` | ```Type assertion: variable.(Type)``` | ```match variable { Type => /* code */, _ => /* code */ }``` |
| |  | ```isinstance(variable, type)``` | ```instanceof constructor``` |  | ```dynamic_cast<Type*>(pointer)``` | ```reflect.TypeOf(variable)``` |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Loops** |
| | *For* | ```for i in range(10):``` | ```for (let i = 0; i < 10; i++) {}``` | ```for (int i = 0; i < 10; i++) {}``` | ```for (int i = 0; i < 10; i++) {}``` | ```for i := 0; i < 10; i++ {}``` | ```for i in 0..10 {}``` |
| |  | ```for element in list:``` | ```for (const element of array) {}``` | ```for (Type element : array) {}``` | ```for (const auto &element : array) {}``` | ```for _, element := range array {}``` | ```for element in &array {}``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *While* | ```while condition:``` | ```while (condition) {}``` | ```while (condition) {}``` | ```while (condition) {}``` | ```for condition {}``` | ```while condition {}``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Do-While* | ```while True: # ... if not condition: break``` | ```do {} while (condition)``` | ```do {} while (condition)``` | ```do {} while (condition)``` | ```for { # ... if !condition { break } }``` | ```loop { # ... if !condition { break } }``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Conversions** |
| | *Number to String* | ```str(number)``` | ```number.toString()``` | ```Integer.toString(number)``` | ```std::to_string(number)``` | ```strconv.Itoa(number)``` | ```number.to_string()``` |
| |  |  | ```String(number)``` | ```String.valueOf(number)``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *String to Number* | ```int(numberString)``` | ```parseInt(numberString)``` | ```Integer.parseInt(numberString)``` | ```std::stoi(numberString)``` | ```strconv.Atoi(numberString)``` | ```numberString.parse::<i32>().unwrap()``` |
| |  | ```float(numberString)``` | ```parseFloat(numberString)``` | ```Double.parseDouble(numberString)``` | ```std::stod(numberString)``` | ```strconv.ParseFloat(numberString, 64)``` | ```numberString.parse::<f64>().unwrap()``` |
| |  |  | ```Number(numberString)``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Character to ASCII* | ```ord(char)``` | ```char.charCodeAt(0)``` | ```(int) char``` | ```static_cast<int>(char)``` | ```int(char)``` | ```char as u8``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *ASCII to Character* | ```chr(ascii)``` | ```String.fromCharCode(ascii)``` | ```(char) ascii``` | ```static_cast<char>(ascii)``` | ```string(ascii)``` | ```char::from(ascii)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Number to Binary* | ```bin(intNumber)``` | ```intNumber.toString(2)``` | ```Integer.toBinaryString(intNumber)``` | ```std::bitset<32>(intNumber).to_string()``` | ```strconv.FormatInt(intNumber, 2)``` | ```format!("{:b}", intNumber)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Number to Hexadecimal* | ```hex(intNumber)``` | ```intNumber.toString(16)``` | ```Integer.toHexString(intNumber)``` | ```std::stringstream ss; ss << std::hex << intNumber; ss.str()``` | ```strconv.FormatInt(intNumber, 16)``` | ```format!("{:x}", intNumber)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Strings** |
| | *Create* | ```string = 'value'``` | ```let string = 'value'``` | ```String string = 'value'``` | ```std::string string = 'value'``` | ```string := 'value'``` | ```let string = 'value'``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Print* | ```print(string)``` | ```console.log(string)``` | ```System.out.println(string)``` | ```std::cout << string``` | ```fmt.Println(string)``` | ```println!("{}", string)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Access char* | ```string[1]``` | ```string.charAt(1)``` | ```string.charAt(1)``` | ```string.at(1)``` | ```string[1]``` | ```string.chars().nth(1)``` |
| |  | ```string[-1]``` | ```string.charAt(string.length - 1)``` | ```string.charAt(string.length() - 1)``` | ```string.at(string.length() - 1)``` | ```string[len(string) - 1]``` | ```string.chars().nth(string.len() - 1)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Find char index* | ```string.index(char)``` | ```string.indexOf(char)``` | ```string.indexOf(char)``` | ```string.find(char)``` | ```strings.Index(string, char)``` | ```string.find(char)``` |
| |  | ```string.find(char)``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Count char* | ```string.count(char)``` | ```(string.match(new RegExp(char, 'g')) || []).length``` | ```StringUtils.countMatches(string, char)``` | ```std::count(string.begin(), string.end(), char)``` | ```strings.Count(string, char)``` | ```string.matches(char).count()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Add/Concatenate* | ```string1 + "string2"``` | ```string1 + string2``` | ```string1.concat(string2)``` | ```string1 + string2``` | ```string1 + string2``` | ```string1 + string2``` |
| |  | ```string1 + string2``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Replace Character/Substring* | ```string.replace(old, new)``` | ```string.replace(old, new)``` | ```string.replace(oldChar, newChar)``` | ```std::replace(string.begin(), string.end(), oldChar, newChar)``` | ```strings.Replace(string, old, new, -1)``` | ```string.replace(old, new)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Change case* | ```string.capitalize()``` | ```string.charAt(0).toUpperCase() + string.slice(1)``` | ```Character.toUpperCase(string.charAt(0)) + string.substring(1)``` | ```std::transform(string.begin(), string.end(), string.begin(), ::toupper)``` | ```strings.Title(string)``` | ```string.to_uppercase()``` |
| |  | ```string.lower()``` | ```string.toLowerCase()``` | ```string.toLowerCase()``` | ```std::transform(string.begin(), string.end(), string.begin(), ::tolower)``` | ```strings.ToLower(string)``` | ```string.to_lowercase()``` |
| |  | ```string.upper()``` | ```string.toUpperCase()``` | ```string.toUpperCase()``` |  | ```strings.ToUpper(string)``` |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Check Case* | ```string.islower()``` | ```string === string.toLowerCase()``` | ```Character.isLowerCase(char)``` | ```islower(char)``` | ```unicode.IsLower(rune)``` | ```char.is_lowercase()``` |
| |  | ```string.isupper()``` | ```string === string.toUpperCase()``` | ```Character.isUpperCase(char)``` | ```isupper(char)``` | ```unicode.IsUpper(rune)``` | ```char.is_uppercase()``` |
| |  | ```string.istitle()``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Slice* | ```string[1:]``` | ```string.slice(1)``` | ```string.substring(1)``` | ```string.substr(1)``` | ```string[1:]``` | ```&string[1..]``` |
| |  | ```string[:5]``` | ```string.slice(0, 5)``` | ```string.substring(0, 5)``` | ```string.substr(0, 5)``` | ```string[:5]``` | ```&string[..5]``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Reverse* | ```string[::-1]``` | ```string.split('').reverse().join('')``` | ```new StringBuilder(string).reverse().toString()``` | ```std::reverse(string.begin(), string.end())``` | ```// Iterate through runes and reverse``` | ```string.chars().rev().collect::<String>()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Sort* | ```''.join(sorted(string))``` | ```string.split('').sort().join('')``` | ```char[] chars = string.toCharArray(); Arrays.sort(chars); String sortedString = new String(chars);``` | ```sort(string.begin(), string.end())``` | ```sort.Slice(runeSlice, func(i, j int) bool { return runeSlice[i] < runeSlice[j] })``` | ```let mut chars: Vec<char> = string.chars().collect(); chars.sort(); let sorted_string: String = chars.into_iter().collect();``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Arrays** |
| | *Create* | ```array = []``` | ```let array = []``` | ```ArrayList<Type> array = new ArrayList<>()``` | ```std::vector<Type> array``` | ```var array []Type``` | ```let mut array: Vec<Type> = Vec::new()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Print* | ```print(array)``` | ```console.log(array)``` | ```System.out.println(array)``` | ```for(const auto &e : array) { std::cout << e << ' '; }``` | ```fmt.Println(array)``` | ```println!("{:?}", array)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Access element* | ```array[index]``` | ```array[index]``` | ```array.get(index)``` | ```array[index]``` | ```array[index]``` | ```array[index]``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Find element index* | ```array.index(element)``` | ```array.indexOf(element)``` | ```array.indexOf(element)``` | ```std::find(array.begin(), array.end(), element) - array.begin()``` | ```sort.Search(len(array), func(i int) bool { return array[i] == element })``` | ```array.iter().position(|&r| r == element)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Count element* | ```array.count(element)``` | ```array.filter(x => x === element).length``` | ```Collections.frequency(array, element)``` | ```std::count(array.begin(), array.end(), element)``` | ```func count(array []Type, element Type) int { count := 0; for _, v := range array { if v == element { count++ } } return count }``` | ```array.iter().filter(|&&x| x == element).count()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Add to array* | ```array.append(element)``` | ```array.push(element)``` | ```array.add(element)``` | ```array.push_back(element)``` | ```array = append(array, element)``` | ```array.push(element)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Delete from array* | ```array.remove(element)``` | ```array.splice(array.indexOf(element), 1)``` | ```array.remove(element)``` | ```array.erase(std::remove(array.begin(), array.end(), element), array.end())``` | ```array = append(array[:index], array[index+1:]...)``` | ```array.remove(index)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Shift* | ```array.pop(0)``` | ```array.shift()``` | ```array.remove(0)``` | ```array.erase(array.begin())``` | ```array = array[1:]``` | ```array.remove(0)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Unshift* | ```array.insert(0, element)``` | ```array.unshift(element)``` | ```array.add(0, element)``` | ```array.insert(array.begin(), element)``` | ```array = append([]Type{element}, array...)``` | ```array.insert(0, element)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Slice* | ```array[start:end]``` | ```array.slice(start, end)``` | ```array.subList(start, end)``` | ```std::vector<Type> slice(array.begin() + start, array.begin() + end)``` | ```array[start:end]``` | ```&array[start..end]``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Sort* | ```array.sort()``` | ```array.sort()``` | ```Collections.sort(array)``` | ```std::sort(array.begin(), array.end())``` | ```sort.Slice(array, func(i, j int) bool { return array[i] < array[j] })``` | ```array.sort()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Reverse* | ```array.reverse()``` | ```array.reverse()``` | ```Collections.reverse(array)``` | ```std::reverse(array.begin(), array.end())``` | ```func reverse(array []Type) { for i, j := 0, len(array)-1; i < j; i, j = i+1, j-1 { array[i], array[j] = array[j], array[i] } }``` | ```array.reverse()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Max* | ```max(array)``` | ```Math.max(...array)``` | ```Collections.max(array)``` | ```*std::max_element(array.begin(), array.end())``` | ```func max(array []Type) Type { max := array[0]; for _, v := range array { if v > max { max = v } } return max }``` | ```*array.iter().max().unwrap()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Min* | ```min(array)``` | ```Math.min(...array)``` | ```Collections.min(array)``` | ```*std::min_element(array.begin(), array.end())``` | ```func min(array []Type) Type { min := array[0]; for _, v := range array { if v < min { min = v } } return min }``` | ```*array.iter().min().unwrap()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Hashmaps** |
| | *Create* | ```hashmap = {}``` | ```let hashmap = {}``` | ```HashMap<Key, Value> hashmap = new HashMap<>()``` | ```std::unordered_map<Key, Value> hashmap``` | ```var hashmap map[Key]Value``` | ```let mut hashmap: HashMap<Key, Value> = HashMap::new()``` |
| |  | ```hashmap = dict()``` | ```let hashmap = new Map()``` | ```Map<Key, Value> hashmap = new LinkedHashMap<>()``` | ```std::map<Key, Value> hashmap``` | ```hashmap := make(map[Key]Value)``` |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Print* | ```print(hashmap)``` | ```console.log(hashmap)``` | ```System.out.println(hashmap)``` | ```for (const auto &kv : hashmap) { std::cout << kv.first << ": " << kv.second << '\n'; }``` | ```for key, value := range hashmap { fmt.Println(key, value) }``` | ```for (key, value) in &hashmap { println!("{}: {}", key, value); }``` |
| |  |  | ```for (let [key, value] of hashmap) { console.log(key, value); }``` | ```hashmap.forEach((key, value) -> System.out.println(key + ": " + value))``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Iterating through keys/values* | ```for key, value in hashmap.items():``` | ```for (const [key, value] of Object.entries(hashmap)) {}``` | ```for (Map.Entry<K, V> entry : hashmap.entrySet()) {}``` | ```for (const auto &pair : hashmap) {}``` | ```for key, value := range hashmap {}``` | ```for (key, value) in &hashmap {}``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Access element* | ```hashmap[key]``` | ```hashmap[key]``` | ```hashmap.get(key)``` | ```hashmap[key]``` | ```hashmap[key]``` | ```hashmap[&key]``` |
| |  | ```hashmap.get(key)``` | ```hashmap.get(key)``` |  | ```hashmap.at(key)``` |  | ```hashmap.get(&key)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Find key of element* | ```next(key for key, value in hashmap.items() if value == search_value)``` | ```Object.keys(hashmap).find(key => hashmap[key] === search_value)``` | ```hashmap.entrySet().stream().filter(entry -> entry.getValue().equals(search_value)).map(Map.Entry::getKey).collect(Collectors.toList())``` | ```std::find_if(hashmap.begin(), hashmap.end(), [&](const auto& kv) { return kv.second == search_value; })->first``` | ```func findKey(hashmap map[Key]Value, searchValue Value) Key { for key, value := range hashmap { if value == searchValue { return key } } return nil }``` | ```hashmap.iter().find(|&(_, &val)| val == search_value).map(|(&key, _)| key)``` |
| |  | ```[key for key, value in hashmap.items() if value == search_value]``` | ```[...hashmap.keys()].find(key => hashmap.get(key) === search_value)``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Count elements* | ```len(hashmap)``` | ```Object.keys(hashmap).length``` | ```hashmap.size()``` | ```hashmap.size()``` | ```len(hashmap)``` | ```hashmap.len()``` |
| |  |  | ```hashmap.size``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Add/Update* | ```hashmap[key] = value``` | ```hashmap[key] = value``` | ```hashmap.put(key, value)``` | ```hashmap[key] = value``` | ```hashmap[key] = value``` | ```hashmap.insert(key, value)``` |
| |  |  | ```hashmap.set(key, value)``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Delete* | ```del hashmap[key]``` | ```delete hashmap[key]``` | ```hashmap.remove(key)``` | ```hashmap.erase(key)``` | ```delete(hashmap, key)``` | ```hashmap.remove(&key)``` |
| |  | ```hashmap.pop(key, None)``` | ```hashmap.delete(key)``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Max* | ```max(hashmap, key=hashmap.get)``` | ```Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)``` | ```Collections.max(hashmap.entrySet(), Map.Entry.comparingByValue()).getKey()``` | ```std::max_element(hashmap.begin(), hashmap.end(), [](const auto& p1, const auto& p2) { return p1.second < p2.second; })->first``` | ```func maxKey(hashmap map[Key]Value) Key { var maxKey Key; var maxValue Value; for key, value := range hashmap { if value > maxValue { maxKey = key; maxValue = value } } return maxKey }``` | ```hashmap.iter().max_by_key(|&(_, &val)| val).map(|(&key, _)| key)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Min* | ```min(hashmap, key=hashmap.get)``` | ```Object.keys(hashmap).reduce((a, b) => hashmap[a] < hashmap[b] ? a : b)``` | ```Collections.min(hashmap.entrySet(), Map.Entry.comparingByValue()).getKey()``` | ```std::min_element(hashmap.begin(), hashmap.end(), [](const auto& p1, const auto& p2) { return p1.second < p2.second; })->first``` | ```func minKey(hashmap map[Key]Value) Key { var minKey Key; var minValue Value = <MAX_VALUE>; for key, value := range hashmap { if value < minValue { minKey = key; minValue = value } } return minKey }``` | ```hashmap.iter().min_by_key(|&(_, &val)| val).map(|(&key, _)| key)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Sets** |
| | *Create* | ```set1 = set()``` | ```let set1 = new Set()``` | ```Set<Type> set1 = new HashSet<>()``` | ```std::set<Type> set1``` | ```set1 := make(map[Type]bool)``` | ```let mut set1: HashSet<Type> = HashSet::new()``` |
| |  | ```set1 = {1, 2, 3}``` | ```let set1 = new Set([1, 2, 3])``` | ```Set<Type> set1 = new TreeSet<>()``` | ```std::unordered_set<Type> set1``` |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Print* | ```print(set1)``` | ```console.log(set1)``` | ```System.out.println(set1)``` | ```for (const auto &value : set1) { std::cout << value << '\n'; }``` | ```for key := range set1 { fmt.Println(key) }``` | ```for value in &set1 { println!("{}", value); }``` |
| |  |  | ```set1.forEach(value => console.log(value))``` | ```set1.forEach(System.out::println)``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Add* | ```set1.add(element)``` | ```set1.add(element)``` | ```set1.add(element)``` | ```set1.insert(element)``` | ```set1[element] = true``` | ```set1.insert(element)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Delete* | ```set1.remove(element)``` | ```set1.delete(element)``` | ```set1.remove(element)``` | ```set1.erase(element)``` | ```delete(set1, element)``` | ```set1.remove(&element)``` |
| |  | ```set1.discard(element)``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Find* | ```element in set1``` | ```set1.has(element)``` | ```set1.contains(element)``` | ```set1.find(element) != set1.end()``` | ```_, exists := set1[element]; exists``` | ```set1.contains(&element)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Count elements* | ```len(set1)``` | ```set1.size``` | ```set1.size()``` | ```set1.size()``` | ```len(set1)``` | ```set1.len()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Union* | ```set1.union(set2)``` | ```new Set([...set1, ...set2])``` | ```set1.addAll(set2)``` | ```set1.insert(set2.begin(), set2.end())``` | ```for element := range set2 { set1[element] = struct{}{} }``` | ```set1.union(&set2).cloned().collect()``` |
| |  | ```set1 \| set2``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Intersection* | ```set1.intersection(set2)``` | ```new Set([...set1].filter(x => set2.has(x)))``` | ```set1.retainAll(set2)``` | ```std::set_intersection(set1.begin(), set1.end(), set2.begin(), set2.end(), std::inserter(result, result.begin()))``` | ```for element := range set1 { if _, found := set2[element]; !found { delete(set1, element) } }``` | ```set1.intersection(&set2).cloned().collect()``` |
| |  | ```set1 & set2``` |  |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Difference* | ```set1 - set2``` | ```new Set([...set1].filter(x => !set2.has(x)))``` | ```set1.removeAll(set2)``` | ```std::set_difference(set1.begin(), set1.end(), set2.begin(), set2.end(), std::inserter(result, result.end()))``` | ```// Using a loop to find difference``` | ```// Using a method from a library like 'difference'``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Subset Check* | ```set1.issubset(set2)``` | ```[...set1].every(x => set2.has(x))``` | ```set1.containsAll(set2)``` | ```std::includes(set1.begin(), set1.end(), set2.begin(), set2.end())``` | ```// Using a loop to check subset``` | ```set1.is_subset(set2)``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Min* | ```min(set1)``` | ```Math.min(...set1)``` | ```Collections.min(set1)``` | ```*std::min_element(set1.begin(), set1.end())``` | ```func min(set1 map[Type]bool) Type { var minValue Type = <MAX_VALUE>; for key := range set1 { if key < minValue { minValue = key } } return minValue }``` | ```*set1.iter().min().unwrap()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Max* | ```max(set1)``` | ```Math.max(...set1)``` | ```Collections.max(set1)``` | ```*std::max_element(set1.begin(), set1.end())``` | ```func max(set1 map[Type]bool) Type { var maxValue Type; for key := range set1 { if key > maxValue { maxValue = key } } return maxValue }``` | ```*set1.iter().max().unwrap()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Date and Time** |
| | *Get Current Date/Time* | ```from datetime import datetime``` | ```let now = new Date()``` | ```import java.time.LocalDateTime``` | ```#include <chrono>``` | ```now := time.Now()``` | ```let now = Utc::now()``` |
| |  | ```now = datetime.now()``` |  | ```LocalDateTime now = LocalDateTime.now()``` | ```auto now = std::chrono::system_clock::now()``` |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Format Date/Time* | ```now.strftime('%Y-%m-%d %H:%M:%S')``` | ```now.toLocaleDateString()``` | ```DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss').format(now)``` | ```std::strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &now)``` | ```now.Format('2006-01-02 15:04:05')``` | ```now.format('%Y-%m-%d %H:%M:%S').to_string()``` |
| |  |  | ```now.toLocaleTimeString()``` |  |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Calculate Difference between Dates* | ```delta = date1 - date2``` | ```let delta = date1 - date2``` | ```Duration duration = Duration.between(date1, date2)``` | ```auto delta = date1 - date2``` | ```delta := date1.Sub(date2)``` | ```let duration = date1.signed_duration_since(date2)``` |
| |  | ```days = delta.days``` | ```let days = Math.floor(delta / (1000 * 60 * 60 * 24))``` | ```long days = duration.toDays()``` | ```auto days = std::chrono::duration_cast<std::chrono::days>(delta).count()``` | ```days := delta.Hours() / 24``` | ```let days = duration.num_days()``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Add/Subtract Time* | ```from datetime import timedelta``` | ```let newDate = new Date(currentDate)``` | ```import java.time.LocalDateTime``` | ```#include <chrono>``` | ```newDate := currentDate.AddDate(0, 0, 5)``` | ```let new_date = current_date + Duration::days(5)``` |
| |  | ```new_date = current_date + timedelta(days=5, hours=3)``` | ```newDate.setDate(currentDate.getDate() + 5)``` | ```import java.time.temporal.ChronoUnit``` | ```auto newDate = currentDate + std::chrono::days(5)``` | ```newDate := currentDate.Add(-time.Hour)``` | ```let new_date = current_date - Duration::hours(1)``` |
| |  | ```new_date = current_date - timedelta(days=2, hours=1)``` | ```newDate.setHours(currentDate.getHours() - 1)``` | ```LocalDateTime newDate = currentDate.plus(5, ChronoUnit.DAYS)``` | ```auto newDate = currentDate - std::chrono::hours(1)``` |  |  |
| |  |  |  | ```LocalDateTime newDate = currentDate.minus(1, ChronoUnit.HOURS)``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Regex** |
| | *Match* | ```import re``` | ```let result = string.match(pattern)``` | ```Pattern pattern = Pattern.compile(regex);``` | ```std::regex_match(string, std::regex(pattern))``` | ```result, _ := regexp.MatchString(pattern, string)``` | ```let re = Regex::new(pattern).unwrap();``` |
| |  | ```result = re.match(pattern, string)``` |  | ```Matcher matcher = pattern.matcher(string);``` |  |  | ```let result = re.is_match(string);``` |
| |  |  |  | ```boolean result = matcher.matches();``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Search* | ```import re``` | ```let result = string.search(pattern)``` | ```Pattern pattern = Pattern.compile(regex);``` | ```std::regex_search(string, std::regex(pattern))``` | ```result, _ := regexp.MatchString(pattern, string)``` | ```let re = Regex::new(pattern).unwrap();``` |
| |  | ```result = re.search(pattern, string)``` |  | ```Matcher matcher = pattern.matcher(string);``` |  |  | ```let result = re.find(string);``` |
| |  |  |  | ```boolean result = matcher.find();``` |  |  |  |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | *Replace* | ```import re``` | ```let result = string.replace(pattern, replacement)``` | ```string.replaceAll(pattern, replacement)``` | ```std::regex_replace(string, std::regex(pattern), replacement)``` | ```result = regexp.MustCompile(pattern).ReplaceAllString(string, replacement)``` | ```let re = Regex::new(pattern).unwrap();``` |
| |  | ```result = re.sub(pattern, replacement, string)``` |  |  |  |  | ```let result = re.replace_all(string, replacement);``` |
| | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |

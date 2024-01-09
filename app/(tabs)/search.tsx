import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import NavtopSearch from "../../components/nav/NavTopSearch";
import { themeGlobal } from "../../styles/themeGlobal";
import { ScrollView } from "react-native-gesture-handler";
import ButtonTitleAction from "../../components/button/ButtonTitleAction";
import ButtonParameters from "../../components/button/ButtonParameters";
import Close from "../../components/icons/Close";
import ButtonViewMoreVertical from "../../components/button/ButtonViewMoreDown";
import Divider from "../../components/divider/Divider";
import ButtonTag from "../../components/button/ButtonTag";
import { router } from "expo-router";
import ArrowRight from "../../components/icons/ArrowRight";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Search = () => {
  const [searchHistoryItems, setSearchHistoryItems] = useState([
    "Search History Item 1",
    "Search History Item 2",
    "Search History Item 3",
    "Search History Item 4",
    "Search History Item 5",
    "Search History Item 6",
    "Search History Item 7",
  ]);
  const [tags, setTags] = useState([
    "Tag 1",
    "Tag 2",
    "tag 3",
    "Tag 4",
    "Tag 5",
    "Tag 6",
    "tag 7",
    "Tag 8",
  ]);
  const [listSearchToFilter, setListSearchToFilter] = useState([
    "Table",
    "Table lamp",
    "Coffee table",
    "Dining table",
    "Side table"
  ]);

  const [showMoreStatus, setShowMoreStatus] = useState<"up" | "down">("up");
  const [numberToShow, setNumberToShow] = useState<number>(2);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResutls, setSearchResults] = useState<string[]>([]);

  const handleClearThis = (index: number) => {
    const updatedSearchItems = [...searchHistoryItems];
    updatedSearchItems.splice(index, 1);
    setSearchHistoryItems(updatedSearchItems);
  };

  const handleClearAll = () => {
    setSearchHistoryItems([]);
  };
  const handleShowMore = () => {
    if (showMoreStatus == "up") {
      setShowMoreStatus("down");
      setNumberToShow(searchHistoryItems.length);
    } else {
      setShowMoreStatus("up");
      setNumberToShow(2);
    }
  };
  const handleSearch = (query:string) =>{
    router.push(`/searchResult?search=${query}`)
  }
  useEffect(()=>{
    const resutls = listSearchToFilter.filter((searchItem)=>searchItem.toLowerCase().includes(searchValue.toLowerCase()))
    setSearchResults(resutls)
  },[searchValue])
 
  return (
    <View style={styles.searchScreen}>
      <View style={styles.navTopWrapper}>
        <NavtopSearch rightIcon={<></>} value={searchValue} onChangeText={(text:string)=>setSearchValue(text)} onClickEnter={()=>{handleSearch(searchValue)}}/>
      </View>
      <View style={themeGlobal.baseStyles.container}>
       {searchValue.length==0 ?(
         <ScrollView style={styles.searchIndex}>
         <View style={styles.titleSectionWrapper}>
           <Text style={themeGlobal.themeTextGlobal.h5}> Search history</Text>
           <ButtonTitleAction title="Clear all" action={handleClearAll} />
         </View>
         <View style={styles.searchHistoryWrapper}>
           {searchHistoryItems.map((item, index) => {
             if (index <= numberToShow)
               return (
                 <TouchableOpacity key={index} onPress={()=>{handleSearch(item)}}>
                   <ButtonParameters
                     title={item}
                     iconRight={<Close />}
                     icon=""
                     label=""
                     action={() => handleClearThis(index)}
                   />
                 </TouchableOpacity>
               );
           })}
           {searchHistoryItems.length > 3 && (
             <ButtonViewMoreVertical
               status={showMoreStatus}
               buttonOnclick={handleShowMore}
             />
           )}
         </View>
         <Divider />
         <View style={styles.titleSectionWrapper}>
           <Text style={themeGlobal.themeTextGlobal.h5}>
             {" "}
             Search sugestions
           </Text>
         </View>
         <View style={styles.searchTagsWrapper}>
           {tags.map((item, index) => {
             return (
               <View key={index} style={styles.searchTagWrapper}>
                 <ButtonTag title={item} action={()=>{handleSearch(item)}} />
               </View>
             );
           })}
         </View>
       </ScrollView>):(
         <ScrollView style={styles.searchList}>
         
         <View style={styles.searchHistoryWrapper}>
           {searchResutls.map((item, index) => {
               return (
                 <View key={index} >
                   <ButtonParameters
                     title={item}
                     iconRight={<ArrowRight />}
                     icon=""
                     label=""
                     action={()=>{handleSearch(item)}}
                   />
                 </View>
               );
           })}

         </View>
         
       </ScrollView>)
       }
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: "white",
    display: "flex",
    height: "100%",
  },
  navTopWrapper: {
    paddingHorizontal: 24,
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  searchHistoryWrapper: {
    marginBottom: 20,
  },
  searchTagsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    maxWidth: "100%",
    gap:10
  },
  searchTagWrapper:{
  },
  searchIndex:{
  },
  searchList:{
    marginTop:20
  }
});

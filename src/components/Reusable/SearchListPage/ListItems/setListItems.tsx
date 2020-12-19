import React from "react";
import { SavedItem } from "../../../../types/User";
import ListItems from ".";

function setListItems(
  oid: string,
  didGet: boolean,
  filter_value: string,

  items: any,
  filtered_items: any,
  selected_items: any,
  selected_item: any,

  url_to_push: string,

  actionBtnIcon: "add" | "remove" | "none",

  setItem: (item: any) => void,
  setAddress: () => void,
  getItems: (oid?: string) => void,
  getSelectedItems: (selected_item: any) => void,

  dialogTitle?: string,
  isDialog?: boolean,
  actionBtnAction?: (item: SavedItem) => void
) {
  if (didGet) {
    if (filter_value !== "") {
      return (
        <ListItems
          dialogTitle={dialogTitle}
          isDialog={isDialog}
          items={filtered_items}
          selected_items={selected_items}
          url={url_to_push!}
          setItem={setItem!}
          setAddress={setAddress}
          actionBtnAction={actionBtnAction}
          actionBtnIcon={actionBtnIcon}
        />
      );
    } else if (items !== undefined) {
      return (
        <ListItems
          dialogTitle={dialogTitle}
          isDialog={isDialog}
          items={items}
          selected_items={selected_items}
          url={url_to_push!}
          setItem={setItem!}
          setAddress={setAddress}
          actionBtnAction={actionBtnAction}
          actionBtnIcon={actionBtnIcon}
        />
      );
    }
  } else {
    if (getItems !== undefined) {
      oid === undefined ? getItems!() : getItems!(oid);
    }
    if (getSelectedItems !== undefined) {
      getSelectedItems(selected_item!);
    }
  }
}

export default setListItems;

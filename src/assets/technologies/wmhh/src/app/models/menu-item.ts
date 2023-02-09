export class MenuItem {
    blockDeliverySales: any;
    cartItemCount: number;
    createdAt: string;
    isCustomizable: boolean;
    isFavourite: number;
    itemDescription: string;
    itemId: string;
    itemName: string;
    itemType: number;
    mediaType: number;
    mediaUrl: string;
    mediaUrlThumb: string;
    restaurantItemId: string;
    currencyCode: string;
    currencySymbol: string;
    price: number;
    priceInclusiveTax: number;
    sequenceNo: number;

    constructor(blockDeliverySales, cartItemCount, createdAt, isCustomizable, isFavourite, itemDescription = '', itemId, itemName, itemType,
        mediaType, mediaUrl, mediaUrlThumb, restaurantItemId, currencyCode, currencySymbol, price = 0, priceInclusiveTax, sequenceNo) {

        blockDeliverySales = this.blockDeliverySales;
        cartItemCount = this.cartItemCount;
        createdAt = this.createdAt;
        isCustomizable  = this.isCustomizable;
        isFavourite = this.isFavourite;
        itemDescription = this.itemDescription;
        itemId = this.itemId;
        itemName = this.itemName;
        itemType = this.itemType;
        mediaType = this.mediaType;
        mediaUrl = this.mediaUrl;
        mediaUrlThumb = this.mediaUrlThumb;
        restaurantItemId = this.restaurantItemId;
        currencyCode = this.currencyCode;
        currencySymbol = this.currencySymbol;
        price = this.price;
        priceInclusiveTax = this.priceInclusiveTax;
        sequenceNo = this.sequenceNo;   

    }
}
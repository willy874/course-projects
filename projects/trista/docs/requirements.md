# Requirements

## Homepage
### Upload banner
- CRUD the content

### Other product or article
- Come from mock data 

## Products
- CRUD the category
   - Create a category ( like a tag )
   - Edit the category name won't affect the inside products
   - Remove a category that will remove the tag, so the product is still there
     - EX: Herb has 3 products, if the herb has been removed, the 3 products will go to the all tag
- List
  - Photos
  - Price ( if there's a discount, shows 2 prices. )
- CRUD the product
  - Creating a product that will transfer to a new page to edit the detail

### Product detail
- Auto get a UUID
- Photos
  - 1 ~ 6 photos
- Product name
  - String
- Size
  - small
  - medium
  - large
  - contact ( for special ordering )
- Devilry date
  - Calendar select
- Price
  - Deffault price number
  - If there's a discount, shows 2 prices
- Ordering number
  - Add
  - Minus
- Reserve
  - A number
- Information
  - Some text and images.
- Extra order
  - Check the item
- Shipment
   - Select type of shipment
- Confirm ordering

## News & Event
- Tags
  - Article list
		
## Article detail
- Title
  - Post date
  - Content
- The event article will show a start and end time
	- Tags
	 - Related post
	 - Related products

## Guide
- Tags
- Article list
	- The newest post
	- Related post
	- Related products
	- Article

## Guide article detail
- Title
  - Post date
  - Content
  - Related post
  - Related products

## Contact
The * means required
The + means from system
- For others
	- Name *
	- E-Mail
	- Contact number *
	- Title  *
	- Message *
- For supplier
	- Name *
	- E-Mail
	- Contact number *
	- Title  *
	- Message *
	- Providing *
	- Address *
	- Certificate *
	- Title *
	- Message *
- For members
	- After login
		- Account +
		- Name +
		- E-Mail +
		- Contact number +
		- Address *
		- Title *
		- Message *

## About
- Introduce
  - Text and images
- Trista-H Select
	- Related products
  - Some intro

## Members
The * means required
The + means from system
- Register
	- Account * 
	- Name * 
	- E-Mail * 
	- Contact number * 
	- Address * 
- Login
	- Member service
		- Account + 
      - Read only
		- Name + 
			- Changed through the EMail check
		- E-Mail
			- Changed through the EMail check
			Contact number
			- Changed through the EMail check
		- Address
			- Default
				- Changed through the EMail check
			- New address
				- Add / Edit
				- Delete
		- History + 
      - Read only
			- Searchable
			- Keep only 1 year
		- Tracing order status

## Cart
The * means required
The + means from system
- Product item
	- Price
	- Add / Minus / Remove
	- The product links
- Total price
	- Auto counting
- Check and ordering
	- Should be the member and login or create account
		- Sender detail * 
			- Don’t show
		- Recipient detail * 
		- Message for recipient
			- Optional
		- Deliver detail * 
		- Pay detail * 
## Terms
- Text only
## Support
- Text only
## Privacy Policy
- Text only
## Langue
- Use i18n
## Sitemap
- Text only
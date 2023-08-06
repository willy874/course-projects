# User Flow


## Sitemap and intro
<img src="https://trista-h.github.io/myImages/Garden-Online-Shop2.png" alt="" width="1200px" />

## Intro of the related sites
<img src="https://trista-h.github.io/myImages/Related-sites.png" alt="" width="1200px" />

## Comparison

### The name of the shop should be meaniful.
- Trista's balcony
### The main sales type of the shop.
- Provided by the main island in Taiwan only.
- For small space plant ( in pot ).
### The target audience of the shop.
- For beginners.
- For herb lovers.
### Products source.
- From a local shop or the farm.
### How to ship?
- Convenience store.
- Ship by 3 work days.
### How to order?
```flow
st=>start: Join member
e=>end: Complete this order by feedback.
op=>operation: ordering
cond=>condition: confirm ordering and get the remittance
op2=> ship out

st->op->cond->op2
cond(yes)->e
cond(no)->op
```
### The product's type.
- Herbs:
    - Mint.
    - Lemon Balm.
    - Thyme.
    - Rocemary.
- Seasons choose

### The product's detail. 
- Photos ( remain that won't be the same )
- Size ( 3' or 5' )
- Extra order ( little gift )
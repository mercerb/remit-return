<script lang="ts">
    let bridgeTraffic = 
    [
 {
   group: "Better Salary",
   var1: 412,
   var2: 627,
   var3: 746,
   total: 1785
 },
 {
   group: "Unemployment",
   var1: 151,
   var2: 271,
   var3: 238,
   total: 660
 },
 {
   group: "Covering basic needs",
   var1: 158,
   var2: 150,
   var3: 218,
   total: 526
 },
 {
   group: "Remittances",
   var1: 87,
   var2: 118,
   var3: 180,
   total: 385
 },
 {
   group: "Lack of money for food",
   var1: 92,
   var2: 178,
   var3: 100,
   total: 370
 },
 {
   group: "Tourism",
   var1: 29,
   var2: 42,
   var3: 86,
   total: 157
 },
 {
   group: "Family reunification",
   var1: 23,
   var2: 35,
   var3: 75,
   total: 133
 },
 {
   group: "Natural hazard",
   var1: 14,
   var2: 68,
   var3: 42,
   total: 124
 },
 {
   group: "Unsafety",
   var1: 5,
   var2: 33,
   var3: 61,
   total: 99
 },
 {
   group: "Other",
   var1: 16,
   var2: 28,
   var3: 23,
   total: 67
 },
 {
   group: "Study",
   var1: 15,
   var2: 29,
   var3: 18,
   total: 62
 },
 {
   group: "Cultural reasons",
   var1: 0,
   var2: 12,
   var3: 18,
   total: 30
 },
 {
   group: "Health",
   var1: 4,
   var2: 11,
   var3: 12,
   total: 27
 },
 {
   group: "Loss of land",
   var1: 5,
   var2: 4,
   var3: 0,
   total: 9
 },
 {
   group: "Domestic violence",
   var1: 2,
   var2: 1,
   var3: 2,
   total: 5
 }
]

export let v=1;

function update(){
  v=1;
}
function update1(){
  v=2;
}
function update2(){
  v=3;
}
function update3(){
  v=4;
}
  </script>
  
  <style>
    svg {
      border: 1px  #ddd;
      width: 100%;
      height: 300px;
    }
  </style>

Motivations for Migration

<body>
    <button on:click={update}>Total</button>
    <button on:click={update1}>Guatemala</button>
    <button on:click={update2}>Honduras</button>
    <button on:click={update3}>El Salvador</button>

</body>
<main>
    
</main>


<svg>
    {#if v==1}
    {#each bridgeTraffic as bridge, i}
      <g transform={`translate(300 ${i * 20 + 10})`}>
        
        <rect width={bridge.total/(6)} height="15" fill="blue" />
        <text font-size="12" text-anchor="end" dominant-baseline="middle" x="-5" y="5">{bridge.group}</text>
        <text font-size="12" text-anchor="" dominant-baseline="middle" x="+300" y="5">{bridge.total + ' people'}</text>
    </g>
    {/each}
   {/if}

   {#if v==2}
   {#each bridgeTraffic as bridge, i}
     <g transform={`translate(300 ${i * 20 + 10})`}>
       
       <rect width={bridge.var1/(6)} height="15" fill="yellow" />
       <text font-size="12" text-anchor="end" dominant-baseline="middle" x="-5" y="5">{bridge.group}</text>
       <text font-size="12" text-anchor="" dominant-baseline="middle" x="+300" y="5">{bridge.var1 + ' people'}</text>
   </g>
   {/each}
  {/if}

  {#if v==3}
  {#each bridgeTraffic as bridge, i}
    <g transform={`translate(300 ${i * 20 + 10})`}>
      
      <rect width={bridge.var2/(6)} height="15" fill="pink" />
      <text font-size="12" text-anchor="end" dominant-baseline="middle" x="-5" y="5">{bridge.group}</text>
      <text font-size="12" text-anchor="" dominant-baseline="middle" x="+300" y="5">{bridge.var2 + ' people'}</text>
  </g>
  {/each}
 {/if}

 {#if v==4}
 {#each bridgeTraffic as bridge, i}
   <g transform={`translate(300 ${i * 20 + 10})`}>
     
     <rect width={bridge.var3/(6)} height="15" fill="green" />
     <text font-size="12" text-anchor="end" dominant-baseline="middle" x="-5" y="5">{bridge.group}</text>
     <text font-size="12" text-anchor="" dominant-baseline="middle" x="+300" y="5">{bridge.var3 + ' people'}</text>
 </g>
 {/each}
{/if}
    
  </svg>
 







 
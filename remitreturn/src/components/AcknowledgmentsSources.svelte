<div class="AckHeading">
    <h2>RemitReturn: Acknowledgments, Data Sources, and Methodology</h2>

    <p>
        <i>
            Understanding the economic growth associated with migration and
            economic opportunities to send remittances home while contributing
            to the destination country's economy
        </i>
    </p>
</div>

<div class="Ack">
    <h4>Acknowledgments</h4>
    <p>
        As mentioned on the main page, the project was completed by Mercer
        Borris, Ahsan Imran, and Shelby Unger for 6.C85, the "Interactive Data
        Visualization and Society" class, in the spring of 2023. Thanks to all
        team members for working together and supporting each other in various
        phases of the project. Thanks to the professors, Arvind Satyanarayan and
        Sarah Williams, and the rest of the teaching staff (thanks TAs!). A
        special thanks to our client, the World Food Programme of the UN, for
        providing us with sensitive and important data, as well as joining us in
        class to better understand the nuances of the data - and humanize it.
    </p>
    <h4>Data Sources</h4>
    <p>
        This data visualization was made with data contributed by the <b
            >United Nations World Food Programme (WFP).</b
        >
    </p>

    <p>
        In addition to the in-class lab content, the following open-source code
        examples helped us piece together various components:
    </p>

    <table class="ack-table">
        <tr>
            <th>Component</th>
            <th>Relevant Code Example</th>
        </tr>
        <tr>
            <td>Bar Chart</td>
            <td
                ><a
                    href="https://github.com/paulgb/svelte-vis/blob/master/src/02-bar.svelte"
                    >Bar Chart Example by GitHub user paulgb</a
                ></td
            >
        </tr>
        <tr>
            <td>Sankey Diagram</td>
            <td
                ><a
                    href="https://gist.github.com/aholachek/5df1a95afe871be868360f312d35d057"
                    >Sankey Example by GitHub user aholachek</a
                ></td
            >
        </tr>
        <tr>
            <td>Mini Connected Bar Charts</td>
            <td
                ><a
                    href="https://mitcheljager.github.io/svelte-tiny-linked-charts/"
                    >Tiny Linked Charts for Svelte by Mitchel Jager</a
                ></td
            >
        </tr>
    </table>

    <p>
        Finally, we also used the resources available at the <a
            href="https://svelte.dev/">Svelte website</a
        > such as examples and the tutorial.
    </p>

    <h4>Data Processing</h4>
    <p>
        The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.
    </p>

    <p>
        The data input and processing was done in Python. That code is pushed to
        the public GitHub repository here: <a
            href="https://github.com/mercerb/remit-return">remit-return</a
        >. "class-data/class_data_import.py" is the relevant file. It can only
        be run with a local copy of the World Food Programme data (to ensure
        data security and privacy), but essentially it compiles a dataset of
        respondents who reported a cost of migration, with the destination
        country being the USA, and who could be linked to sending monthly
        remittances.
    </p>
</div>

<style>
    .AckHeading {
        text-align: center;
        width: 80%;
        margin: auto;
        font-size: 18px;
        font-family: sans-serif;
    }

    .Ack {
        text-align: left;
        width: 80%;
        margin: auto;
        font-size: 18px;
        font-family: sans-serif;
    }

    .ack-table {
        font-size: 18px;
    }

    td,
    th {
        padding: 10px;
    }
    tr {
        line-height: 10px;
    }
</style>

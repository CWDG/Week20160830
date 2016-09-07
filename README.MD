`git clone https://github.com/CWDG/Week20160830.git `

`cd Week20160830`

`meteor`

To perform commands on the database, navigate inside of your directory and then type
`meteor mongo`

Some helpful commands:
-remove all entries: `db.messages.remove({})
-add a new entry: `db.messages.insert({text: "hey harambe", time: "8pm", nickname: "Bebe"})`

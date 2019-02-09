Sub generateFirebaseJson()
    ''''variable''''
    Dim myFile As String
    Dim jsonItems As New Collection
    Dim jsonDocument As New Dictionary
    Dim jsonQuotes As New Dictionary
    Dim jsonQuote As New Dictionary
    Dim index As Integer
    index = 2

    ''''save new file''''
    myFile = Application.ActiveWorkbook.Path & "/data" & ActiveSheet.Name & ".json"

    ''''open file''''
    Open myFile For Output As #1

    ''''build data''''
    Do While Cells(index, 1) <> ""
        'set quotes
        jsonQuote("author") = Cells(index, 2)
        jsonQuote("share_count") = Cells(index, 3)
        jsonQuote("vi_value") = Cells(index, 4)
        jsonQuote("vi_category") = Cells(index, 5)
        jsonQuote("en_value") = Cells(index, 6)
        jsonQuote("en _category") = Cells(index, 7)
        jsonQuotes(Cells(index, 1)) = jsonQuote

        Set jsonQuote = Nothing
        index = index + 1
    Loop
    'set to document
    jsonDocument("quotes") = jsonQuotes


    Print #1, JsonConverter.ConvertToJson(jsonDocument, Whitespace:=3)

    ''''close file''''
    Close #1
End Sub





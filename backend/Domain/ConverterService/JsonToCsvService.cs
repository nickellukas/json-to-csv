
using System.Text;

namespace JsonConverter.Domain.ConverterService
{
    public class JsonToCsvService
    {
        public string ConvertJsonToCsv(IEnumerable<Dictionary<string, object>> data)
        {
            var csvBuilder = new StringBuilder();

            try
            {
                var headerColumns = SetHeaderColumns(data);

                csvBuilder.AppendLine(string.Join(",", headerColumns));

                foreach (var item in data)
                {
                    var row = string.Join(",", headerColumns.Select(k =>
                        $"\"{(item.ContainsKey(k) ? item[k]?.ToString()?.Replace("\"", "\"\"") ?? "" : "")}\""
                    ));

                    csvBuilder.AppendLine(row);
                }
            }
            catch (Exception)
            {

                throw new Exception("Formato não suportado.");
            }

            return csvBuilder.ToString();
        }

        private List<string> SetHeaderColumns(IEnumerable<Dictionary<string, object>> data)
        {
            var columns = new List<string>();

            foreach (var rowData in data)
            {
                foreach (var columnsData in rowData)
                {
                    if (!columns.Contains(columnsData.Key))
                    {
                        columns.Add(columnsData.Key);
                    }
                }
            }

            return columns;
        }
    }

}
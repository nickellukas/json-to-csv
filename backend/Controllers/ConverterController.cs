using Microsoft.AspNetCore.Mvc;
using JsonConverter.Domain.ConverterService;

namespace JSON2CSV.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class JsonToCsvController : ControllerBase
    {
        private readonly JsonToCsvService _jsonToCsvService;

        public JsonToCsvController()
        {
            _jsonToCsvService = new JsonToCsvService();
        }

        [HttpPost("convert")]
        public IActionResult Convert([FromBody] IEnumerable<Dictionary<string, object>> jsonInput)
        {
            if (jsonInput is null)
                return BadRequest("A entrada Json não pode ser vazia!");


            if (!jsonInput.Any())
                return BadRequest("A entrada Json não contém dados.");

            try
            {
                var csv = _jsonToCsvService.ConvertJsonToCsv(jsonInput);
                return Ok(new { csv });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Erro ao processar o JSON: {ex.Message}" });
            }
        }
    }
}
